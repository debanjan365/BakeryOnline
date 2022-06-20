package com.springrest.springrest.controller;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.ProductStock;
import com.springrest.springrest.entities.User;
import com.springrest.springrest.services.ProductStockService;
import com.springrest.springrest.services.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MyController {
	
	
		@Autowired
		private ProductStockService productStockService;
		@Autowired
		private UserService userService;
		
		@GetMapping("/products")
		public List<ProductStock> getProductStock(){
			return this.productStockService.getProductStock();
			
		}
		@GetMapping("/getall")
		public Iterable<User>getUsers()
		{
		return userService.listAll();    
		}
		
		@PostMapping(value = "/save")
		private long saveUser(@RequestBody User users)  
		{  
			userService.saveOrUpdate(users);  
		return  users.getId();  
		}
		
		@RequestMapping("/user/{id}")  
		private User getUser(@PathVariable(name = "id") int userid)  
		{  
		return userService.getUserById(userid);  
		}  
		
		@PutMapping("/edit/{id}")
	    private User update(@RequestBody User users, @PathVariable int id)  
	    {  
			userService.saveOrUpdate(users);  
	       return users;  
	    }  
		
		@DeleteMapping("/delete/{id}")  
		private void deleteStudent(@PathVariable("id") int id)  
		{  
			userService.delete(id);  
		}  
		  

			
		
}
