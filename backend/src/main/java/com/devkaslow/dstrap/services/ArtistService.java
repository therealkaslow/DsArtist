package com.devkaslow.dstrap.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devkaslow.dstrap.dto.ArtistDTO;
import com.devkaslow.dstrap.entities.Artist;
import com.devkaslow.dstrap.repositories.ArtistRepository;

@Service
public class ArtistService {

	@Autowired
	private ArtistRepository repository;

	@Transactional(readOnly = true)
	public Page<ArtistDTO> findAll(Pageable pageable) {
		Page<Artist> result = repository.findAll(pageable);
		Page<ArtistDTO> page = result.map(x -> new ArtistDTO(x));
		return page;
	}

	@Transactional(readOnly = true)
	public ArtistDTO findById(Long id) {
		Artist result = repository.findById(id).get();
		ArtistDTO dto = new ArtistDTO(result);
		return dto;
	}
}
