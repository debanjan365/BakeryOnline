package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.ProductStockDao;
import com.springrest.springrest.entities.ProductStock;

@Service
public class ProductStockServiceImpl implements ProductStockService  {

	@Autowired
	private ProductStockDao productStockDao;
	
  
	
	@Override
	public List<ProductStock> getProductStock() {
		return productStockDao.findAll();
	}

		
}
