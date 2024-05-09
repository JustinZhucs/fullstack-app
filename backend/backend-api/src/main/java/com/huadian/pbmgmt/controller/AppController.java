package com.huadian.pbmgmt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.huadian.pbmgmt.dao.DaoException;
import com.huadian.pbmgmt.entities.LoginRequest;
import com.huadian.pbmgmt.entities.LoginResult;
import com.huadian.pbmgmt.entities.Product;
import com.huadian.pbmgmt.entities.User;
import com.huadian.pbmgmt.services.ProductService;

@CrossOrigin("*")
@RestController
//@RequestMapping("products")
public class AppController {
	
	@Autowired
	private ProductService productService;
	
	
	@GetMapping(value="/products/all", produces = MediaType.APPLICATION_JSON_VALUE)
	public String getAllProducts() {
		System.out.println("Controller is called.");
		return "Hello, this is all I have for you.";
	}
	
	@PostMapping(value="/products", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public Product submitProduct(@RequestBody Product product) {
		
		System.out.println("submitProduct: product = " + product);
		try {
			return productService.submitProduct(product);
		} catch (DaoException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
//		return "Product submitted - " + product;
		
	}
	
	
	@PostMapping(value="/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public LoginResult login(@RequestBody LoginRequest loginRequest) {
		
		System.out.println("login: request = " + loginRequest);
		LoginResult result = new LoginResult();
//		if ("jz@gmail.com".equals(loginRequest.getEmail()) && "12345678".equals(loginRequest.getPassword())) {
//			result.setStatus(true);
//			result.setFirstName("Justin");
//			result.setLastName("Zhu");
//		} else {
//			result.setStatus(false);
//		}
		try {
			User user = productService.authenticate(loginRequest);
			if (user != null) {
				result.setStatus(true);
				result.setFirstName(user.getFirstName());
				result.setLastName(user.getLastName());
			} else {
				result.setStatus(false);
			}
		} catch (DaoException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
		return result;
		
	}
	
//	http://td.com/customers  (GET, POST)
//	http://td.com/customers/101 (GET, PUT, DELETE)
//	http://td.com/customers/101/accounts
//	http://td.com/customers/101/accounts/2310021
//		
//		
//		http://td.com/customers/101/accounts/2310021.html
//		http://td.com/customers/101/accounts/2310021.pdf
//		http://td.com/customers/101/accounts/2310021.txt
//			
//	GET     retrieve (R)
//	POST	create (C)
//	PUT		update (U)
//	DELETE	delete/remove (D)
//	
//	
//	CRUD
	// test
		

}
