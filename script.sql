#  SELECT `Order`.OrderDate,count(`Order`.OrderID),sum(`Order Details`.Price)
#  FROM `Order` INNER JOIN `Order Details`
#      ON `Order`.OrderID = `Order Details`.OrderID GROUP BY OrderDate;
#
#  SELECT DISTINCT(`Order`.OrderDate),sum(`Order Details`.OrderQty) FROM
#     `Order` INNER JOIN `Order Details`
#     ON  `Order`.OrderID = `Order Details`.OrderID GROUP BY `Order`.OrderDate;