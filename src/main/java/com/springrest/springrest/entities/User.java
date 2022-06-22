package com.springrest.springrest.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reusers")
public class User {
	    @Id
	    @Column(name="id")
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private long id;
	 
	    @Column(name="uname")
	    private String uname;
	    
	    @Column(name="upwd")
	    private String upwd;
	    
	    @Column(name="uemail")
	    private String uemail;
	    
	    
	    @Column(name="uphone")
	    private String uphone;


		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}

		public String getUname() {
			return uname;
		}
		public void setUname(String uname) {
			this.uname = uname;
		}

		public String getUpwd() {
			return upwd;
		}
		
		public void setUpwd(String upwd) {
			this.upwd = upwd;
		}

		public String getUemail() {
			return uemail;
		}
		public void setUemail(String uemail) {
			this.uemail = uemail;
		}

		public String getUphone() {
			return uphone;
		}
		public void setUphone(String uphone) {
			this.uphone = uphone;
		}
	   
	    
}
