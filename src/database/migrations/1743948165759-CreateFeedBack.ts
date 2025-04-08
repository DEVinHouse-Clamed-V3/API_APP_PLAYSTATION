import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateFeedBack1743948165759 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "feedbackGame",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "productId",
                        type: "int",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "feedback",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "experience",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "recommend",
                        type: "boolean",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    }
                ]
            })
        )
        await queryRunner.createForeignKey(
            "feedbackGame",
            new TableForeignKey({
                columnNames: ["productId"],
                referencedColumnNames: ["id"],
                referencedTableName: "games",
                onDelete: "CASCADE",
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "feedbackGame",
            "FK_productId"
        )
        await queryRunner.dropTable("feedbackGame");
    }

}
