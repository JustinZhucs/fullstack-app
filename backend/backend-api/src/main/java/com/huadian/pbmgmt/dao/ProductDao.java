package com.huadian.pbmgmt.dao;

import com.huadian.pbmgmt.entities.Product;
import com.huadian.pbmgmt.entities.User;

public interface ProductDao {

	void createProductTransaction(Product product) throws DaoException;

	int getTotalQuantity(String productName) throws DaoException;

	User getUser(String email, String password) throws DaoException;

}
