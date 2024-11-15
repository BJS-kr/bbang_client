CREATE TABLE `users` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`user_id` varchar(15) NOT NULL,
	`password` varchar(30) NOT NULL,
	`nickname` varchar(15),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_user_id_unique` UNIQUE(`user_id`)
);
