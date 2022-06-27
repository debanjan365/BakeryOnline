package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springrest.springrest.entities.ProductStock;

@Repository
public interface ProductStockDao extends JpaRepository<ProductStock,Integer> {

}
