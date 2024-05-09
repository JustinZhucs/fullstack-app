package com.huadian.pbmgmt.services;

import com.huadian.pbmgmt.dao.DaoException;
import com.huadian.pbmgmt.entities.LoginRequest;
import com.huadian.pbmgmt.entities.LoginResult;
import com.huadian.pbmgmt.entities.Product;
import com.huadian.pbmgmt.entities.User;

public interface ProductService {
	
	public Product submitProduct(Product product) throws DaoException;
	public User authenticate(LoginRequest request) throws DaoException;

}


