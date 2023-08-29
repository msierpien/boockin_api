import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "UserRole", loc: { start: 5, end: 13 } },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ADMIN", loc: { start: 18, end: 23 } },
          directives: [],
          loc: { start: 18, end: 23 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CUSTOMER",
            loc: { start: 26, end: 34 },
          },
          directives: [],
          loc: { start: 26, end: 34 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "MODERATOR",
            loc: { start: 37, end: 46 },
          },
          directives: [],
          loc: { start: 37, end: 46 },
        },
      ],
      loc: { start: 0, end: 48 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Role", loc: { start: 55, end: 59 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 64, end: 66 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Int", loc: { start: 68, end: 71 } },
            loc: { start: 68, end: 71 },
          },
          directives: [],
          loc: { start: 64, end: 71 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 74, end: 78 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "UserRole",
              loc: { start: 80, end: 88 },
            },
            loc: { start: 80, end: 88 },
          },
          directives: [],
          loc: { start: 74, end: 88 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 91, end: 95 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "User", loc: { start: 97, end: 101 } },
            loc: { start: 97, end: 101 },
          },
          directives: [],
          loc: { start: 91, end: 101 },
        },
      ],
      loc: { start: 50, end: 103 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 109, end: 114 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 104, end: 114 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 121, end: 129 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 116, end: 129 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 142, end: 147 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "services",
            loc: { start: 152, end: 160 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Service",
                    loc: { start: 163, end: 170 },
                  },
                  loc: { start: 163, end: 170 },
                },
                loc: { start: 163, end: 171 },
              },
              loc: { start: 162, end: 172 },
            },
            loc: { start: 162, end: 173 },
          },
          directives: [],
          loc: { start: 152, end: 173 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "servicesById",
            loc: { start: 176, end: 188 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 189, end: 191 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 193, end: 196 },
                  },
                  loc: { start: 193, end: 196 },
                },
                loc: { start: 193, end: 197 },
              },
              directives: [],
              loc: { start: 189, end: 197 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Service",
                loc: { start: 200, end: 207 },
              },
              loc: { start: 200, end: 207 },
            },
            loc: { start: 200, end: 208 },
          },
          directives: [],
          loc: { start: 176, end: 208 },
        },
      ],
      loc: { start: 130, end: 210 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 224, end: 232 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createService",
            loc: { start: 237, end: 250 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 251, end: 255 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 257, end: 263 },
                  },
                  loc: { start: 257, end: 263 },
                },
                loc: { start: 257, end: 264 },
              },
              directives: [],
              loc: { start: 251, end: 264 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 266, end: 277 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 279, end: 285 },
                },
                loc: { start: 279, end: 285 },
              },
              directives: [],
              loc: { start: 266, end: 285 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "availability_status",
                loc: { start: 287, end: 306 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 308, end: 314 },
                  },
                  loc: { start: 308, end: 314 },
                },
                loc: { start: 308, end: 315 },
              },
              directives: [],
              loc: { start: 287, end: 315 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "daily_price",
                loc: { start: 317, end: 328 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Float",
                    loc: { start: 330, end: 335 },
                  },
                  loc: { start: 330, end: 335 },
                },
                loc: { start: 330, end: 336 },
              },
              directives: [],
              loc: { start: 317, end: 336 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "service_type_id",
                loc: { start: 338, end: 353 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 355, end: 358 },
                  },
                  loc: { start: 355, end: 358 },
                },
                loc: { start: 355, end: 359 },
              },
              directives: [],
              loc: { start: 338, end: 359 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Service",
                loc: { start: 362, end: 369 },
              },
              loc: { start: 362, end: 369 },
            },
            loc: { start: 362, end: 370 },
          },
          directives: [],
          loc: { start: 237, end: 370 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateService",
            loc: { start: 373, end: 386 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 387, end: 389 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 391, end: 394 },
                  },
                  loc: { start: 391, end: 394 },
                },
                loc: { start: 391, end: 395 },
              },
              directives: [],
              loc: { start: 387, end: 395 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 397, end: 401 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 403, end: 409 },
                  },
                  loc: { start: 403, end: 409 },
                },
                loc: { start: 403, end: 410 },
              },
              directives: [],
              loc: { start: 397, end: 410 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 412, end: 423 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 425, end: 431 },
                },
                loc: { start: 425, end: 431 },
              },
              directives: [],
              loc: { start: 412, end: 431 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "availability_status",
                loc: { start: 433, end: 452 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 454, end: 460 },
                  },
                  loc: { start: 454, end: 460 },
                },
                loc: { start: 454, end: 461 },
              },
              directives: [],
              loc: { start: 433, end: 461 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "daily_price",
                loc: { start: 463, end: 474 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Float",
                    loc: { start: 476, end: 481 },
                  },
                  loc: { start: 476, end: 481 },
                },
                loc: { start: 476, end: 482 },
              },
              directives: [],
              loc: { start: 463, end: 482 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "service_type_id",
                loc: { start: 484, end: 499 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 501, end: 503 },
                  },
                  loc: { start: 501, end: 503 },
                },
                loc: { start: 501, end: 504 },
              },
              directives: [],
              loc: { start: 484, end: 504 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Service",
                loc: { start: 507, end: 514 },
              },
              loc: { start: 507, end: 514 },
            },
            loc: { start: 507, end: 515 },
          },
          directives: [],
          loc: { start: 373, end: 515 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteService",
            loc: { start: 518, end: 531 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 532, end: 534 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 536, end: 539 },
                  },
                  loc: { start: 536, end: 539 },
                },
                loc: { start: 536, end: 540 },
              },
              directives: [],
              loc: { start: 532, end: 540 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Service",
                  loc: { start: 544, end: 551 },
                },
                loc: { start: 544, end: 551 },
              },
              loc: { start: 544, end: 552 },
            },
            loc: { start: 543, end: 553 },
          },
          directives: [],
          loc: { start: 518, end: 553 },
        },
      ],
      loc: { start: 212, end: 555 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Service", loc: { start: 562, end: 569 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 574, end: 576 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 578, end: 581 },
              },
              loc: { start: 578, end: 581 },
            },
            loc: { start: 578, end: 582 },
          },
          directives: [],
          loc: { start: 574, end: 582 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 585, end: 589 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 591, end: 597 },
              },
              loc: { start: 591, end: 597 },
            },
            loc: { start: 591, end: 598 },
          },
          directives: [],
          loc: { start: 585, end: 598 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 601, end: 612 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 614, end: 620 },
            },
            loc: { start: 614, end: 620 },
          },
          directives: [],
          loc: { start: 601, end: 620 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "availability_status",
            loc: { start: 623, end: 642 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 644, end: 650 },
              },
              loc: { start: 644, end: 650 },
            },
            loc: { start: 644, end: 651 },
          },
          directives: [],
          loc: { start: 623, end: 651 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "daily_price",
            loc: { start: 654, end: 665 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 667, end: 672 },
              },
              loc: { start: 667, end: 672 },
            },
            loc: { start: 667, end: 673 },
          },
          directives: [],
          loc: { start: 654, end: 673 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "created_at",
            loc: { start: 676, end: 686 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 688, end: 694 },
              },
              loc: { start: 688, end: 694 },
            },
            loc: { start: 688, end: 695 },
          },
          directives: [],
          loc: { start: 676, end: 695 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updated_at",
            loc: { start: 698, end: 708 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 710, end: 716 },
              },
              loc: { start: 710, end: 716 },
            },
            loc: { start: 710, end: 717 },
          },
          directives: [],
          loc: { start: 698, end: 717 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "service_type",
            loc: { start: 720, end: 732 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ServiceType",
              loc: { start: 734, end: 745 },
            },
            loc: { start: 734, end: 745 },
          },
          directives: [],
          loc: { start: 720, end: 745 },
        },
      ],
      loc: { start: 557, end: 747 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 760, end: 765 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reservedTypes",
            loc: { start: 770, end: 783 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ServiceType",
                loc: { start: 786, end: 797 },
              },
              loc: { start: 786, end: 797 },
            },
            loc: { start: 785, end: 798 },
          },
          directives: [],
          loc: { start: 770, end: 798 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reservedType",
            loc: { start: 801, end: 813 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 814, end: 816 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 818, end: 821 },
                  },
                  loc: { start: 818, end: 821 },
                },
                loc: { start: 818, end: 822 },
              },
              directives: [],
              loc: { start: 814, end: 822 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ServiceType",
              loc: { start: 825, end: 836 },
            },
            loc: { start: 825, end: 836 },
          },
          directives: [],
          loc: { start: 801, end: 836 },
        },
      ],
      loc: { start: 748, end: 838 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 852, end: 860 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createServiceType",
            loc: { start: 865, end: 882 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "type_name",
                loc: { start: 883, end: 892 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 894, end: 900 },
                  },
                  loc: { start: 894, end: 900 },
                },
                loc: { start: 894, end: 901 },
              },
              directives: [],
              loc: { start: 883, end: 901 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 903, end: 914 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 916, end: 922 },
                  },
                  loc: { start: 916, end: 922 },
                },
                loc: { start: 916, end: 923 },
              },
              directives: [],
              loc: { start: 903, end: 923 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ServiceType",
              loc: { start: 926, end: 937 },
            },
            loc: { start: 926, end: 937 },
          },
          directives: [],
          loc: { start: 865, end: 937 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateServiceType",
            loc: { start: 940, end: 957 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 958, end: 960 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 962, end: 965 },
                  },
                  loc: { start: 962, end: 965 },
                },
                loc: { start: 962, end: 966 },
              },
              directives: [],
              loc: { start: 958, end: 966 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "type_name",
                loc: { start: 968, end: 977 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 979, end: 985 },
                  },
                  loc: { start: 979, end: 985 },
                },
                loc: { start: 979, end: 986 },
              },
              directives: [],
              loc: { start: 968, end: 986 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 988, end: 999 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1001, end: 1007 },
                },
                loc: { start: 1001, end: 1007 },
              },
              directives: [],
              loc: { start: 988, end: 1007 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ServiceType",
              loc: { start: 1010, end: 1021 },
            },
            loc: { start: 1010, end: 1021 },
          },
          directives: [],
          loc: { start: 940, end: 1021 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteServiceType",
            loc: { start: 1024, end: 1041 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1042, end: 1044 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 1046, end: 1049 },
                  },
                  loc: { start: 1046, end: 1049 },
                },
                loc: { start: 1046, end: 1050 },
              },
              directives: [],
              loc: { start: 1042, end: 1050 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ServiceType",
              loc: { start: 1053, end: 1064 },
            },
            loc: { start: 1053, end: 1064 },
          },
          directives: [],
          loc: { start: 1024, end: 1064 },
        },
      ],
      loc: { start: 840, end: 1066 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ServiceType",
        loc: { start: 1073, end: 1084 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1089, end: 1091 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1093, end: 1096 },
              },
              loc: { start: 1093, end: 1096 },
            },
            loc: { start: 1093, end: 1097 },
          },
          directives: [],
          loc: { start: 1089, end: 1097 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type_name",
            loc: { start: 1100, end: 1109 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1111, end: 1117 },
              },
              loc: { start: 1111, end: 1117 },
            },
            loc: { start: 1111, end: 1118 },
          },
          directives: [],
          loc: { start: 1100, end: 1118 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1121, end: 1132 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1134, end: 1140 },
            },
            loc: { start: 1134, end: 1140 },
          },
          directives: [],
          loc: { start: 1121, end: 1140 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 1143, end: 1152 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1154, end: 1160 },
              },
              loc: { start: 1154, end: 1160 },
            },
            loc: { start: 1154, end: 1161 },
          },
          directives: [],
          loc: { start: 1143, end: 1161 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 1164, end: 1173 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1175, end: 1181 },
              },
              loc: { start: 1175, end: 1181 },
            },
            loc: { start: 1175, end: 1182 },
          },
          directives: [],
          loc: { start: 1164, end: 1182 },
        },
      ],
      loc: { start: 1068, end: 1184 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1197, end: 1202 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 1207, end: 1211 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 1212, end: 1218 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 1220, end: 1223 },
                  },
                  loc: { start: 1220, end: 1223 },
                },
                loc: { start: 1220, end: 1224 },
              },
              directives: [],
              loc: { start: 1212, end: 1224 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 1227, end: 1231 },
            },
            loc: { start: 1227, end: 1231 },
          },
          directives: [],
          loc: { start: 1207, end: 1231 },
        },
      ],
      loc: { start: 1185, end: 1233 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1247, end: 1255 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "signup",
            loc: { start: 1260, end: 1266 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 1267, end: 1272 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1274, end: 1280 },
                  },
                  loc: { start: 1274, end: 1280 },
                },
                loc: { start: 1274, end: 1281 },
              },
              directives: [],
              loc: { start: 1267, end: 1281 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 1283, end: 1291 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1293, end: 1299 },
                  },
                  loc: { start: 1293, end: 1299 },
                },
                loc: { start: 1293, end: 1300 },
              },
              directives: [],
              loc: { start: 1283, end: 1300 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 1302, end: 1306 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1308, end: 1314 },
                  },
                  loc: { start: 1308, end: 1314 },
                },
                loc: { start: 1308, end: 1315 },
              },
              directives: [],
              loc: { start: 1302, end: 1315 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "AuthPayload",
              loc: { start: 1318, end: 1329 },
            },
            loc: { start: 1318, end: 1329 },
          },
          directives: [],
          loc: { start: 1260, end: 1329 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "login",
            loc: { start: 1332, end: 1337 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 1338, end: 1343 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1345, end: 1351 },
                  },
                  loc: { start: 1345, end: 1351 },
                },
                loc: { start: 1345, end: 1352 },
              },
              directives: [],
              loc: { start: 1338, end: 1352 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 1354, end: 1362 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1364, end: 1370 },
                  },
                  loc: { start: 1364, end: 1370 },
                },
                loc: { start: 1364, end: 1371 },
              },
              directives: [],
              loc: { start: 1354, end: 1371 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "AuthPayload",
              loc: { start: 1374, end: 1385 },
            },
            loc: { start: 1374, end: 1385 },
          },
          directives: [],
          loc: { start: 1332, end: 1385 },
        },
      ],
      loc: { start: 1235, end: 1387 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthPayload",
        loc: { start: 1394, end: 1405 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 1410, end: 1415 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1417, end: 1423 },
            },
            loc: { start: 1417, end: 1423 },
          },
          directives: [],
          loc: { start: 1410, end: 1423 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 1426, end: 1430 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 1432, end: 1436 },
            },
            loc: { start: 1432, end: 1436 },
          },
          directives: [],
          loc: { start: 1426, end: 1436 },
        },
      ],
      loc: { start: 1389, end: 1438 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 1445, end: 1449 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1454, end: 1456 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1458, end: 1461 },
              },
              loc: { start: 1458, end: 1461 },
            },
            loc: { start: 1458, end: 1462 },
          },
          directives: [],
          loc: { start: 1454, end: 1462 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1465, end: 1469 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1471, end: 1477 },
              },
              loc: { start: 1471, end: 1477 },
            },
            loc: { start: 1471, end: 1478 },
          },
          directives: [],
          loc: { start: 1465, end: 1478 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 1481, end: 1486 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1488, end: 1494 },
              },
              loc: { start: 1488, end: 1494 },
            },
            loc: { start: 1488, end: 1495 },
          },
          directives: [],
          loc: { start: 1481, end: 1495 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "service",
            loc: { start: 1498, end: 1505 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Service",
                loc: { start: 1508, end: 1515 },
              },
              loc: { start: 1508, end: 1515 },
            },
            loc: { start: 1507, end: 1516 },
          },
          directives: [],
          loc: { start: 1498, end: 1516 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "roles",
            loc: { start: 1519, end: 1524 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Role",
                loc: { start: 1527, end: 1531 },
              },
              loc: { start: 1527, end: 1531 },
            },
            loc: { start: 1526, end: 1532 },
          },
          directives: [],
          loc: { start: 1519, end: 1532 },
        },
      ],
      loc: { start: 1440, end: 1534 },
    },
  ],
  loc: { start: 0, end: 1535 },
} as unknown as DocumentNode;
