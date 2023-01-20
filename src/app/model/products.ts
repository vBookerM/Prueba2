export type products = {
id:	Number;
title:	String;
description:	String;
price:	Number;
discountPercentage:	Number;
rating:	Number;
stock:	Number;
brand:	String;
category:	String;
thumbnail:	String;
images:	String[];

}

export type productsRespuesta ={
  Atributo: string;
  products:	products[];
  total:	string;
  skip:	number | null;
  limit:	string;

}
