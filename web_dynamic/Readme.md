# Web framework

**Install**  
`pip3 install Flask`


run Api:
```
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.0-hbnb
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.1-hbnb
```

open in other tab:
```
curl -s -XGET http://0.0.0.0:5000/0-hbnb/ | head -6
curl -s -XGET http://0.0.0.0:5000/1-hbnb/ | head -6
```

open in browser:
```
http://localhost:5000/0-hbnb
http://localhost:5000/1-hbnb
```