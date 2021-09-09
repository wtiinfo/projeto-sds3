package com.devsuperior.dsvendas.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository saleRepository;

	@Autowired
	private SellerRepository sellerRepository;

	@Transactional(readOnly = true)//readOnly, para evitar o lock, por ser apenas uma consulta
	public Page<SaleDTO> findAll(Pageable pageable) {
		sellerRepository.findAll();// Pré-carregua na memoria da JPA. Evitando o excesso de consulta SQL para Sellers. 
		
		Page<Sale> result = saleRepository.findAll(pageable);
		return result.map(seller -> new SaleDTO(seller));
	}

}
