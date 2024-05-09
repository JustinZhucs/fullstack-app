package com.huadian.pbmgmt.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.huadian.pbmgmt.dao.DaoException;
import com.huadian.pbmgmt.dao.ProductDao;
import com.huadian.pbmgmt.entities.Product;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductDao productDao;

	@Override
	public Product submitProduct(Product product) throws DaoException {
		
		productDao.createProductTransaction(product);
		
		int totalQuantity = productDao.getTotalQuantity(product.getName());
		
		return new Product(0, product.getName(), totalQuantity);
		
	}

}
