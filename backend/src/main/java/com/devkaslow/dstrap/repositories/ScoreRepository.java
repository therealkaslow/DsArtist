package com.devkaslow.dstrap.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devkaslow.dstrap.entities.Score;
import com.devkaslow.dstrap.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>  {

	
}
