package com.springrest.springrest.dao;

import org.springframework.data.repository.CrudRepository;

import com.springrest.springrest.entities.User;

public interface UserDao extends CrudRepository<User,Integer> {
	public User findByuemailIgnoreCase(String uemail);
}
