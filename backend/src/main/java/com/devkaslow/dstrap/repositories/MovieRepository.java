package com.devkaslow.dstrap.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devkaslow.dstrap.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}