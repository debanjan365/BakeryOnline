package com.springrest.springrest.services;


import com.springrest.springrest.entities.User;

public interface UserService {

	public Iterable<User> listAll();
	public void saveOrUpdate(User users);
	public User getUserById(long id);  
	public void update(User users, int id);
	public void delete(long id);  
	public User findByuemailIgnoreCase(String uemail);
	
	
}
