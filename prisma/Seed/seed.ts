import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const roles = ["ADMIN", "CUSTOMER", "MODERATOR"];

async function main() {
    const user = await createUsers();
    await createRoles(user.id);
    console.log({ user });
}

async function createUsers() {

    const existingUser = await prisma.user.findUnique({
        where: {
            email: 'admin@example.com'
        }
    });

    if (existingUser) return existingUser;

    const hashedPassword = await bcrypt.hash('admin', 10);

    const adminUser = await prisma.user.create({
        data: {
            name: 'Admin',
            email: 'admin@example.com',
            password: hashedPassword,
        },
    });

    return adminUser;
}

async function createRoles(userId: number) {
    for (const roleName of roles) {
        let role = await prisma.role.findUnique({
            where: { name: roleName },
        });

        if (!role) {
            role = await prisma.role.create({
                data: {
                    name: roleName,
                },
            });
        }

        // Sprawdzanie, czy relacja już istnieje
        const existingUserRole = await prisma.userRole.findUnique({
            where: {
                userId_roleId: {
                    userId: userId,
                    roleId: role.id
                }
            }
        });

        if (!existingUserRole) {
            await prisma.userRole.create({
                data: {
                    userId: userId,
                    roleId: role.id,
                }
            });
        }
    }
}
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
