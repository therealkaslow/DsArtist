package com.devkaslow.dstrap.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devkaslow.dstrap.entities.User;

public interface UserRepository extends JpaRepository<User, Long>  {

	User findByEmail(String email);
}
