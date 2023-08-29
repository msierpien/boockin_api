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
          name: {
            kind: "Name",
            value: "reserved",
            loc: { start: 22, end: 30 },
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
                    value: "Reserved",
                    loc: { start: 33, end: 41 },
                  },
                  loc: { start: 33, end: 41 },
                },
                loc: { start: 33, end: 42 },
              },
              loc: { start: 32, end: 43 },
            },
            loc: { start: 32, end: 44 },
          },
          directives: [],
          loc: { start: 22, end: 44 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reservedById",
            loc: { start: 47, end: 59 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 60, end: 62 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 64, end: 67 },
                  },
                  loc: { start: 64, end: 67 },
                },
                loc: { start: 64, end: 68 },
              },
              directives: [],
              loc: { start: 60, end: 68 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Reserved",
                loc: { start: 71, end: 79 },
              },
              loc: { start: 71, end: 79 },
            },
            loc: { start: 71, end: 80 },
          },
          directives: [],
          loc: { start: 47, end: 80 },
        },
      ],
      loc: { start: 0, end: 82 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 96, end: 104 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createReserved",
            loc: { start: 109, end: 123 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 124, end: 128 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 130, end: 136 },
                  },
                  loc: { start: 130, end: 136 },
                },
                loc: { start: 130, end: 137 },
              },
              directives: [],
              loc: { start: 124, end: 137 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 139, end: 150 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 152, end: 158 },
                },
                loc: { start: 152, end: 158 },
              },
              directives: [],
              loc: { start: 139, end: 158 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "availability_status",
                loc: { start: 160, end: 179 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 181, end: 187 },
                  },
                  loc: { start: 181, end: 187 },
                },
                loc: { start: 181, end: 188 },
              },
              directives: [],
              loc: { start: 160, end: 188 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "daily_price",
                loc: { start: 190, end: 201 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Float",
                    loc: { start: 203, end: 208 },
                  },
                  loc: { start: 203, end: 208 },
                },
                loc: { start: 203, end: 209 },
              },
              directives: [],
              loc: { start: 190, end: 209 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "item_type_id",
                loc: { start: 211, end: 223 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 225, end: 228 },
                  },
                  loc: { start: 225, end: 228 },
                },
                loc: { start: 225, end: 229 },
              },
              directives: [],
              loc: { start: 211, end: 229 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Reserved",
                loc: { start: 232, end: 240 },
              },
              loc: { start: 232, end: 240 },
            },
            loc: { start: 232, end: 241 },
          },
          directives: [],
          loc: { start: 109, end: 241 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateReserved",
            loc: { start: 244, end: 258 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 259, end: 261 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 263, end: 266 },
                  },
                  loc: { start: 263, end: 266 },
                },
                loc: { start: 263, end: 267 },
              },
              directives: [],
              loc: { start: 259, end: 267 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 269, end: 273 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 275, end: 281 },
                  },
                  loc: { start: 275, end: 281 },
                },
                loc: { start: 275, end: 282 },
              },
              directives: [],
              loc: { start: 269, end: 282 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 284, end: 295 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 297, end: 303 },
                },
                loc: { start: 297, end: 303 },
              },
              directives: [],
              loc: { start: 284, end: 303 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "availability_status",
                loc: { start: 305, end: 324 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 326, end: 332 },
                  },
                  loc: { start: 326, end: 332 },
                },
                loc: { start: 326, end: 333 },
              },
              directives: [],
              loc: { start: 305, end: 333 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "daily_price",
                loc: { start: 335, end: 346 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Float",
                    loc: { start: 348, end: 353 },
                  },
                  loc: { start: 348, end: 353 },
                },
                loc: { start: 348, end: 354 },
              },
              directives: [],
              loc: { start: 335, end: 354 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "item_type_id",
                loc: { start: 356, end: 368 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 370, end: 372 },
                  },
                  loc: { start: 370, end: 372 },
                },
                loc: { start: 370, end: 373 },
              },
              directives: [],
              loc: { start: 356, end: 373 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Reserved",
                loc: { start: 376, end: 384 },
              },
              loc: { start: 376, end: 384 },
            },
            loc: { start: 376, end: 385 },
          },
          directives: [],
          loc: { start: 244, end: 385 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteReserved",
            loc: { start: 388, end: 402 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 403, end: 405 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 407, end: 410 },
                  },
                  loc: { start: 407, end: 410 },
                },
                loc: { start: 407, end: 411 },
              },
              directives: [],
              loc: { start: 403, end: 411 },
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
                  loc: { start: 415, end: 423 },
                },
                loc: { start: 415, end: 423 },
              },
              loc: { start: 415, end: 424 },
            },
            loc: { start: 414, end: 425 },
          },
          directives: [],
          loc: { start: 388, end: 425 },
        },
      ],
      loc: { start: 84, end: 427 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Reserved", loc: { start: 434, end: 442 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 447, end: 449 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 451, end: 454 },
              },
              loc: { start: 451, end: 454 },
            },
            loc: { start: 451, end: 455 },
          },
          directives: [],
          loc: { start: 447, end: 455 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 458, end: 462 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 464, end: 470 },
              },
              loc: { start: 464, end: 470 },
            },
            loc: { start: 464, end: 471 },
          },
          directives: [],
          loc: { start: 458, end: 471 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 474, end: 485 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 487, end: 493 },
            },
            loc: { start: 487, end: 493 },
          },
          directives: [],
          loc: { start: 474, end: 493 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "availability_status",
            loc: { start: 496, end: 515 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 517, end: 523 },
              },
              loc: { start: 517, end: 523 },
            },
            loc: { start: 517, end: 524 },
          },
          directives: [],
          loc: { start: 496, end: 524 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "daily_price",
            loc: { start: 527, end: 538 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 540, end: 545 },
              },
              loc: { start: 540, end: 545 },
            },
            loc: { start: 540, end: 546 },
          },
          directives: [],
          loc: { start: 527, end: 546 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "created_at",
            loc: { start: 549, end: 559 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 561, end: 567 },
              },
              loc: { start: 561, end: 567 },
            },
            loc: { start: 561, end: 568 },
          },
          directives: [],
          loc: { start: 549, end: 568 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updated_at",
            loc: { start: 571, end: 581 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 583, end: 589 },
              },
              loc: { start: 583, end: 589 },
            },
            loc: { start: 583, end: 590 },
          },
          directives: [],
          loc: { start: 571, end: 590 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "item_type",
            loc: { start: 593, end: 602 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ReservedType",
              loc: { start: 604, end: 616 },
            },
            loc: { start: 604, end: 616 },
          },
          directives: [],
          loc: { start: 593, end: 616 },
        },
      ],
      loc: { start: 429, end: 618 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 631, end: 636 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reservedTypes",
            loc: { start: 641, end: 654 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ReservedType",
                loc: { start: 657, end: 669 },
              },
              loc: { start: 657, end: 669 },
            },
            loc: { start: 656, end: 670 },
          },
          directives: [],
          loc: { start: 641, end: 670 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reservedType",
            loc: { start: 673, end: 685 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 686, end: 688 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 690, end: 693 },
                  },
                  loc: { start: 690, end: 693 },
                },
                loc: { start: 690, end: 694 },
              },
              directives: [],
              loc: { start: 686, end: 694 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ReservedType",
              loc: { start: 697, end: 709 },
            },
            loc: { start: 697, end: 709 },
          },
          directives: [],
          loc: { start: 673, end: 709 },
        },
      ],
      loc: { start: 619, end: 711 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 725, end: 733 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createReservedType",
            loc: { start: 738, end: 756 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "type_name",
                loc: { start: 757, end: 766 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 768, end: 774 },
                  },
                  loc: { start: 768, end: 774 },
                },
                loc: { start: 768, end: 775 },
              },
              directives: [],
              loc: { start: 757, end: 775 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 777, end: 788 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 790, end: 796 },
                  },
                  loc: { start: 790, end: 796 },
                },
                loc: { start: 790, end: 797 },
              },
              directives: [],
              loc: { start: 777, end: 797 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ReservedType",
              loc: { start: 800, end: 812 },
            },
            loc: { start: 800, end: 812 },
          },
          directives: [],
          loc: { start: 738, end: 812 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateReservedType",
            loc: { start: 815, end: 833 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 834, end: 836 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 838, end: 841 },
                  },
                  loc: { start: 838, end: 841 },
                },
                loc: { start: 838, end: 842 },
              },
              directives: [],
              loc: { start: 834, end: 842 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "type_name",
                loc: { start: 844, end: 853 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 855, end: 861 },
                  },
                  loc: { start: 855, end: 861 },
                },
                loc: { start: 855, end: 862 },
              },
              directives: [],
              loc: { start: 844, end: 862 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "description",
                loc: { start: 864, end: 875 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 877, end: 883 },
                },
                loc: { start: 877, end: 883 },
              },
              directives: [],
              loc: { start: 864, end: 883 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ReservedType",
              loc: { start: 886, end: 898 },
            },
            loc: { start: 886, end: 898 },
          },
          directives: [],
          loc: { start: 815, end: 898 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteReservedType",
            loc: { start: 901, end: 919 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 920, end: 922 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 924, end: 927 },
                  },
                  loc: { start: 924, end: 927 },
                },
                loc: { start: 924, end: 928 },
              },
              directives: [],
              loc: { start: 920, end: 928 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ReservedType",
              loc: { start: 931, end: 943 },
            },
            loc: { start: 931, end: 943 },
          },
          directives: [],
          loc: { start: 901, end: 943 },
        },
      ],
      loc: { start: 713, end: 945 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ReservedType",
        loc: { start: 952, end: 964 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 969, end: 971 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 973, end: 976 },
              },
              loc: { start: 973, end: 976 },
            },
            loc: { start: 973, end: 977 },
          },
          directives: [],
          loc: { start: 969, end: 977 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "type_name",
            loc: { start: 980, end: 989 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 991, end: 997 },
              },
              loc: { start: 991, end: 997 },
            },
            loc: { start: 991, end: 998 },
          },
          directives: [],
          loc: { start: 980, end: 998 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1001, end: 1012 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1014, end: 1020 },
            },
            loc: { start: 1014, end: 1020 },
          },
          directives: [],
          loc: { start: 1001, end: 1020 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 1023, end: 1032 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1034, end: 1040 },
              },
              loc: { start: 1034, end: 1040 },
            },
            loc: { start: 1034, end: 1041 },
          },
          directives: [],
          loc: { start: 1023, end: 1041 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 1044, end: 1053 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1055, end: 1061 },
              },
              loc: { start: 1055, end: 1061 },
            },
            loc: { start: 1055, end: 1062 },
          },
          directives: [],
          loc: { start: 1044, end: 1062 },
        },
      ],
      loc: { start: 947, end: 1064 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1070, end: 1075 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1065, end: 1075 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1082, end: 1090 },
      },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1077, end: 1090 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1103, end: 1108 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 1113, end: 1117 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 1118, end: 1124 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 1126, end: 1129 },
                  },
                  loc: { start: 1126, end: 1129 },
                },
                loc: { start: 1126, end: 1130 },
              },
              directives: [],
              loc: { start: 1118, end: 1130 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 1133, end: 1137 },
            },
            loc: { start: 1133, end: 1137 },
          },
          directives: [],
          loc: { start: 1113, end: 1137 },
        },
      ],
      loc: { start: 1091, end: 1139 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1153, end: 1161 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "signup",
            loc: { start: 1166, end: 1172 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 1173, end: 1178 },
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
              loc: { start: 1173, end: 1187 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 1189, end: 1197 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1199, end: 1205 },
                  },
                  loc: { start: 1199, end: 1205 },
                },
                loc: { start: 1199, end: 1206 },
              },
              directives: [],
              loc: { start: 1189, end: 1206 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 1208, end: 1212 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1214, end: 1220 },
                  },
                  loc: { start: 1214, end: 1220 },
                },
                loc: { start: 1214, end: 1221 },
              },
              directives: [],
              loc: { start: 1208, end: 1221 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "AuthPayload",
              loc: { start: 1224, end: 1235 },
            },
            loc: { start: 1224, end: 1235 },
          },
          directives: [],
          loc: { start: 1166, end: 1235 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "login",
            loc: { start: 1238, end: 1243 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 1244, end: 1249 },
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
              loc: { start: 1244, end: 1258 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 1260, end: 1268 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1270, end: 1276 },
                  },
                  loc: { start: 1270, end: 1276 },
                },
                loc: { start: 1270, end: 1277 },
              },
              directives: [],
              loc: { start: 1260, end: 1277 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "AuthPayload",
              loc: { start: 1280, end: 1291 },
            },
            loc: { start: 1280, end: 1291 },
          },
          directives: [],
          loc: { start: 1238, end: 1291 },
        },
      ],
      loc: { start: 1141, end: 1293 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "AuthPayload",
        loc: { start: 1300, end: 1311 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "token",
            loc: { start: 1316, end: 1321 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1323, end: 1329 },
            },
            loc: { start: 1323, end: 1329 },
          },
          directives: [],
          loc: { start: 1316, end: 1329 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "user",
            loc: { start: 1332, end: 1336 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 1338, end: 1342 },
            },
            loc: { start: 1338, end: 1342 },
          },
          directives: [],
          loc: { start: 1332, end: 1342 },
        },
      ],
      loc: { start: 1295, end: 1344 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 1351, end: 1355 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1360, end: 1362 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1364, end: 1367 },
              },
              loc: { start: 1364, end: 1367 },
            },
            loc: { start: 1364, end: 1368 },
          },
          directives: [],
          loc: { start: 1360, end: 1368 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1371, end: 1375 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1377, end: 1383 },
              },
              loc: { start: 1377, end: 1383 },
            },
            loc: { start: 1377, end: 1384 },
          },
          directives: [],
          loc: { start: 1371, end: 1384 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 1387, end: 1392 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1394, end: 1400 },
              },
              loc: { start: 1394, end: 1400 },
            },
            loc: { start: 1394, end: 1401 },
          },
          directives: [],
          loc: { start: 1387, end: 1401 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "Reserved",
            loc: { start: 1404, end: 1412 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Reserved",
                loc: { start: 1415, end: 1423 },
              },
              loc: { start: 1415, end: 1423 },
            },
            loc: { start: 1414, end: 1424 },
          },
          directives: [],
          loc: { start: 1404, end: 1424 },
        },
      ],
      loc: { start: 1346, end: 1426 },
    },
  ],
  loc: { start: 0, end: 1427 },
} as unknown as DocumentNode;
