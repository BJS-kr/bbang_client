CREATE TABLE `users` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(15) NOT NULL,
	`password` varchar(30) NOT NULL,
	`nickname` varchar(15) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_user_id_unique` UNIQUE(`user_id`),
	CONSTRAINT `users_nickname_unique` UNIQUE(`nickname`)
);
