package com.devkaslow.dstrap.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devkaslow.dstrap.entities.Artist;

public interface ArtistRepository extends JpaRepository<Artist, Long>  {

}
