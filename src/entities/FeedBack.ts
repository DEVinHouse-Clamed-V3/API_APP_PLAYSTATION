import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Games } from "./Games";


@Entity("feedbackGame")
export class FeedBack {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Games)
    @JoinColumn({ name: "productId" }) // <-- isso aqui resolve o problema
    productId: Games;

    @Column({ type: "varchar", nullable: false })
    name: string;

    @Column({ type: "varchar", nullable: false })
    email: string;

    @Column({ type: "varchar", nullable: false })
    feedback: string;

    @Column({ type: "varchar", nullable: false })
    experience: string;

    @Column({ type: "boolean", nullable: false })
    recommend: boolean;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
}   