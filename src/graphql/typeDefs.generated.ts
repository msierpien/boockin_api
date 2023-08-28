import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "items", loc: { start: 22, end: 27 } },
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
                    value: "Reserved",
                    loc: { start: 30, end: 38 },
                  },
                  loc: { start: 30, end: 38 },
                },
                loc: { start: 30, end: 39 },
              },
              loc: { start: 29, end: 40 },
            },
            loc: { start: 29, end: 41 },
          },
          directives: [],
          loc: { start: 22, end: 41 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "item", loc: { start: 44, end: 48 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 49, end: 51 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 53, end: 55 },
                  },
                  loc: { start: 53, end: 55 },
                },
                loc: { start: 53, end: 56 },
              },
              directives: [],
              loc: { start: 49, end: 56 },
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
                  value: "Reserved",
                  loc: { start: 60, end: 68 },
                },
                loc: { start: 60, end: 68 },
              },
              loc: { start: 60, end: 69 },
            },
            loc: { start: 59, end: 70 },
          },
          directives: [],
          loc: { start: 44, end: 70 },
        },
      ],
      loc: { start: 0, end: 72 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 86, end: 94 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createReserved",
            loc: { start: 99, end: 113 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 114, end: 118 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 120, end: 126 },
                  },
                  loc: { start: 120, end: 126 },
                },
                loc: { start: 120, end: 127 },
              },
              directives: [],
              loc: { start: 114, end: 127 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 129, end: 140 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 142, end: 148 },
                },
                loc: { start: 142, end: 148 },
              },
              directives: [],
              loc: { start: 129, end: 148 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "availability_status",
                loc: { start: 150, end: 169 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 171, end: 177 },
                  },
                  loc: { start: 171, end: 177 },
                },
                loc: { start: 171, end: 178 },
              },
              directives: [],
              loc: { start: 150, end: 178 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "daily_price",
                loc: { start: 180, end: 191 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Float",
                    loc: { start: 193, end: 198 },
                  },
                  loc: { start: 193, end: 198 },
                },
                loc: { start: 193, end: 199 },
              },
              directives: [],
              loc: { start: 180, end: 199 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "item_type_id",
                loc: { start: 201, end: 213 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 215, end: 217 },
                  },
                  loc: { start: 215, end: 217 },
                },
                loc: { start: 215, end: 218 },
              },
              directives: [],
              loc: { start: 201, end: 218 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Reserved",
                loc: { start: 221, end: 229 },
              },
              loc: { start: 221, end: 229 },
            },
            loc: { start: 221, end: 230 },
          },
          directives: [],
          loc: { start: 99, end: 230 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateReserved",
            loc: { start: 233, end: 247 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 248, end: 250 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 252, end: 254 },
                  },
                  loc: { start: 252, end: 254 },
                },
                loc: { start: 252, end: 255 },
              },
              directives: [],
              loc: { start: 248, end: 255 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 257, end: 261 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 263, end: 269 },
                  },
                  loc: { start: 263, end: 269 },
                },
                loc: { start: 263, end: 270 },
              },
              directives: [],
              loc: { start: 257, end: 270 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 272, end: 283 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 285, end: 291 },
                },
                loc: { start: 285, end: 291 },
              },
              directives: [],
              loc: { start: 272, end: 291 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "availability_status",
                loc: { start: 293, end: 312 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 314, end: 320 },
                  },
                  loc: { start: 314, end: 320 },
                },
                loc: { start: 314, end: 321 },
              },
              directives: [],
              loc: { start: 293, end: 321 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "daily_price",
                loc: { start: 323, end: 334 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Float",
                    loc: { start: 336, end: 341 },
                  },
                  loc: { start: 336, end: 341 },
                },
                loc: { start: 336, end: 342 },
              },
              directives: [],
              loc: { start: 323, end: 342 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "item_type_id",
                loc: { start: 344, end: 356 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 358, end: 360 },
                  },
                  loc: { start: 358, end: 360 },
                },
                loc: { start: 358, end: 361 },
              },
              directives: [],
              loc: { start: 344, end: 361 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Reserved",
                loc: { start: 364, end: 372 },
              },
              loc: { start: 364, end: 372 },
            },
            loc: { start: 364, end: 373 },
          },
          directives: [],
          loc: { start: 233, end: 373 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteReserved",
            loc: { start: 376, end: 390 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 391, end: 393 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 395, end: 397 },
                  },
                  loc: { start: 395, end: 397 },
                },
                loc: { start: 395, end: 398 },
              },
              directives: [],
              loc: { start: 391, end: 398 },
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
                  value: "Reserved",
                  loc: { start: 402, end: 410 },
                },
                loc: { start: 402, end: 410 },
              },
              loc: { start: 402, end: 411 },
            },
            loc: { start: 401, end: 412 },
          },
          directives: [],
          loc: { start: 376, end: 412 },
        },
      ],
      loc: { start: 74, end: 414 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Reserved", loc: { start: 421, end: 429 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 434, end: 436 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 438, end: 440 },
              },
              loc: { start: 438, end: 440 },
            },
            loc: { start: 438, end: 441 },
          },
          directives: [],
          loc: { start: 434, end: 441 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 444, end: 448 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 450, end: 456 },
              },
              loc: { start: 450, end: 456 },
            },
            loc: { start: 450, end: 457 },
          },
          directives: [],
          loc: { start: 444, end: 457 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 460, end: 471 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 473, end: 479 },
            },
            loc: { start: 473, end: 479 },
          },
          directives: [],
          loc: { start: 460, end: 479 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "availability_status",
            loc: { start: 482, end: 501 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 503, end: 509 },
              },
              loc: { start: 503, end: 509 },
            },
            loc: { start: 503, end: 510 },
          },
          directives: [],
          loc: { start: 482, end: 510 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "daily_price",
            loc: { start: 513, end: 524 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 526, end: 531 },
              },
              loc: { start: 526, end: 531 },
            },
            loc: { start: 526, end: 532 },
          },
          directives: [],
          loc: { start: 513, end: 532 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "created_at",
            loc: { start: 535, end: 545 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 547, end: 553 },
              },
              loc: { start: 547, end: 553 },
            },
            loc: { start: 547, end: 554 },
          },
          directives: [],
          loc: { start: 535, end: 554 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updated_at",
            loc: { start: 557, end: 567 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 569, end: 575 },
              },
              loc: { start: 569, end: 575 },
            },
            loc: { start: 569, end: 576 },
          },
          directives: [],
          loc: { start: 557, end: 576 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "item_type",
            loc: { start: 579, end: 588 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ReservedType",
              loc: { start: 590, end: 602 },
            },
            loc: { start: 590, end: 602 },
          },
          directives: [],
          loc: { start: 579, end: 602 },
        },
      ],
      loc: { start: 416, end: 604 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 617, end: 622 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reservedTypes",
            loc: { start: 627, end: 640 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ReservedType",
                loc: { start: 643, end: 655 },
              },
              loc: { start: 643, end: 655 },
            },
            loc: { start: 642, end: 656 },
          },
          directives: [],
          loc: { start: 627, end: 656 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reservedType",
            loc: { start: 659, end: 671 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 672, end: 674 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 676, end: 678 },
                  },
                  loc: { start: 676, end: 678 },
                },
                loc: { start: 676, end: 679 },
              },
              directives: [],
              loc: { start: 672, end: 679 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ReservedType",
              loc: { start: 682, end: 694 },
            },
            loc: { start: 682, end: 694 },
          },
          directives: [],
          loc: { start: 659, end: 694 },
        },
      ],
      loc: { start: 605, end: 696 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 710, end: 718 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createReservedType",
            loc: { start: 723, end: 741 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "type_name",
                loc: { start: 742, end: 751 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 753, end: 759 },
                  },
                  loc: { start: 753, end: 759 },
                },
                loc: { start: 753, end: 760 },
              },
              directives: [],
              loc: { start: 742, end: 760 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 762, end: 773 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 775, end: 781 },
                  },
                  loc: { start: 775, end: 781 },
                },
                loc: { start: 775, end: 782 },
              },
              directives: [],
              loc: { start: 762, end: 782 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ReservedType",
              loc: { start: 785, end: 797 },
            },
            loc: { start: 785, end: 797 },
          },
          directives: [],
          loc: { start: 723, end: 797 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateReservedType",
            loc: { start: 800, end: 818 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 819, end: 821 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 823, end: 825 },
                  },
                  loc: { start: 823, end: 825 },
                },
                loc: { start: 823, end: 826 },
              },
              directives: [],
              loc: { start: 819, end: 826 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "type_name",
                loc: { start: 828, end: 837 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 839, end: 845 },
                  },
                  loc: { start: 839, end: 845 },
                },
                loc: { start: 839, end: 846 },
              },
              directives: [],
              loc: { start: 828, end: 846 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 848, end: 859 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 861, end: 867 },
                },
                loc: { start: 861, end: 867 },
              },
              directives: [],
              loc: { start: 848, end: 867 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ReservedType",
              loc: { start: 870, end: 882 },
            },
            loc: { start: 870, end: 882 },
          },
          directives: [],
          loc: { start: 800, end: 882 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteReservedType",
            loc: { start: 885, end: 903 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 904, end: 906 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 908, end: 910 },
                  },
                  loc: { start: 908, end: 910 },
                },
                loc: { start: 908, end: 911 },
              },
              directives: [],
              loc: { start: 904, end: 911 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ReservedType",
              loc: { start: 914, end: 926 },
            },
            loc: { start: 914, end: 926 },
          },
          directives: [],
          loc: { start: 885, end: 926 },
        },
      ],
      loc: { start: 698, end: 928 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ReservedType",
        loc: { start: 935, end: 947 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 952, end: 954 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 956, end: 958 },
              },
              loc: { start: 956, end: 958 },
            },
            loc: { start: 956, end: 959 },
          },
          directives: [],
          loc: { start: 952, end: 959 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type_name",
            loc: { start: 962, end: 971 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 973, end: 979 },
              },
              loc: { start: 973, end: 979 },
            },
            loc: { start: 973, end: 980 },
          },
          directives: [],
          loc: { start: 962, end: 980 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 983, end: 994 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 996, end: 1002 },
            },
            loc: { start: 996, end: 1002 },
          },
          directives: [],
          loc: { start: 983, end: 1002 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 1005, end: 1014 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1016, end: 1022 },
              },
              loc: { start: 1016, end: 1022 },
            },
            loc: { start: 1016, end: 1023 },
          },
          directives: [],
          loc: { start: 1005, end: 1023 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 1026, end: 1035 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1037, end: 1043 },
              },
              loc: { start: 1037, end: 1043 },
            },
            loc: { start: 1037, end: 1044 },
          },
          directives: [],
          loc: { start: 1026, end: 1044 },
        },
      ],
      loc: { start: 930, end: 1046 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1052, end: 1057 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1047, end: 1057 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1064, end: 1072 },
      },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1059, end: 1072 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1085, end: 1090 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 1095, end: 1099 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 1100, end: 1106 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 1108, end: 1111 },
                },
                loc: { start: 1108, end: 1111 },
              },
              directives: [],
              loc: { start: 1100, end: 1111 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 1114, end: 1118 },
            },
            loc: { start: 1114, end: 1118 },
          },
          directives: [],
          loc: { start: 1095, end: 1118 },
        },
      ],
      loc: { start: 1073, end: 1120 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1134, end: 1142 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "signup",
            loc: { start: 1147, end: 1153 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 1154, end: 1159 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1161, end: 1167 },
                  },
                  loc: { start: 1161, end: 1167 },
                },
                loc: { start: 1161, end: 1168 },
              },
              directives: [],
              loc: { start: 1154, end: 1168 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 1170, end: 1178 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1180, end: 1186 },
                  },
                  loc: { start: 1180, end: 1186 },
                },
                loc: { start: 1180, end: 1187 },
              },
              directives: [],
              loc: { start: 1170, end: 1187 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 1189, end: 1193 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1195, end: 1201 },
                  },
                  loc: { start: 1195, end: 1201 },
                },
                loc: { start: 1195, end: 1202 },
              },
              directives: [],
              loc: { start: 1189, end: 1202 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "AuthPayload",
              loc: { start: 1205, end: 1216 },
            },
            loc: { start: 1205, end: 1216 },
          },
          directives: [],
          loc: { start: 1147, end: 1216 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "login",
            loc: { start: 1219, end: 1224 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 1225, end: 1230 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1232, end: 1238 },
                  },
                  loc: { start: 1232, end: 1238 },
                },
                loc: { start: 1232, end: 1239 },
              },
              directives: [],
              loc: { start: 1225, end: 1239 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 1241, end: 1249 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1251, end: 1257 },
                  },
                  loc: { start: 1251, end: 1257 },
                },
                loc: { start: 1251, end: 1258 },
              },
              directives: [],
              loc: { start: 1241, end: 1258 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "AuthPayload",
              loc: { start: 1261, end: 1272 },
            },
            loc: { start: 1261, end: 1272 },
          },
          directives: [],
          loc: { start: 1219, end: 1272 },
        },
      ],
      loc: { start: 1122, end: 1274 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthPayload",
        loc: { start: 1281, end: 1292 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 1297, end: 1302 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1304, end: 1310 },
            },
            loc: { start: 1304, end: 1310 },
          },
          directives: [],
          loc: { start: 1297, end: 1310 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 1313, end: 1317 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 1319, end: 1323 },
            },
            loc: { start: 1319, end: 1323 },
          },
          directives: [],
          loc: { start: 1313, end: 1323 },
        },
      ],
      loc: { start: 1276, end: 1325 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 1332, end: 1336 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1341, end: 1343 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1345, end: 1347 },
              },
              loc: { start: 1345, end: 1347 },
            },
            loc: { start: 1345, end: 1348 },
          },
          directives: [],
          loc: { start: 1341, end: 1348 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1351, end: 1355 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1357, end: 1363 },
              },
              loc: { start: 1357, end: 1363 },
            },
            loc: { start: 1357, end: 1364 },
          },
          directives: [],
          loc: { start: 1351, end: 1364 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 1367, end: 1372 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1374, end: 1380 },
              },
              loc: { start: 1374, end: 1380 },
            },
            loc: { start: 1374, end: 1381 },
          },
          directives: [],
          loc: { start: 1367, end: 1381 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "Reserved",
            loc: { start: 1384, end: 1392 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Reserved",
                loc: { start: 1395, end: 1403 },
              },
              loc: { start: 1395, end: 1403 },
            },
            loc: { start: 1394, end: 1404 },
          },
          directives: [],
          loc: { start: 1384, end: 1404 },
        },
      ],
      loc: { start: 1327, end: 1406 },
    },
  ],
  loc: { start: 0, end: 1407 },
} as unknown as DocumentNode;
