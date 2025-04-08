import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("games")
export class Games {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "varchar", nullable: false })
  name: string;
  @Column({ type: "varchar", nullable: false })
  console: string;
  @Column({ type: "varchar", nullable: false })
  brand: string;
  @Column({ type: "varchar", nullable: false })
  description: string;
  @Column({ type: "varchar", nullable: false })
  image: string;
  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;
  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Date;

}