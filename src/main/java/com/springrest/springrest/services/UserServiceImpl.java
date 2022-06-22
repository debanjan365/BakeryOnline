package com.springrest.springrest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.UserDao;
import com.springrest.springrest.entities.User;

@Service
public class UserServiceImpl implements UserService{
     
	@Autowired
	private UserDao userDao;
	
	@Override
	public Iterable<User> listAll() {
		return this.userDao.findAll();
	}

	@Override
	public void saveOrUpdate(User users) {
		userDao.save(users);
	}

	@Override
	public User getUserById(long id) {
		return userDao.findById((int) id).get();
	}

	@Override
	public void update(User users, int id) {
		userDao.save(users);
	}

	@Override
	public void delete(long id) {
		userDao.deleteById((int) id);
	}
	
	@Override
	public User findByuemailIgnoreCase(String uemail) {
		return userDao.findByuemailIgnoreCase((String) uemail);
	}

	

}
