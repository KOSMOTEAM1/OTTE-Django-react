import pymysql
import json
import requests
from urllib.error import HTTPError
from datetime import datetime


conn = pymysql.connect(host='192.168.0.41', port=3306,
                       user='team1', password='team1', db='otte_dev')
cur = conn.cursor()

def crawling(start_id, finish_id):

    for i in range(start_id, finish_id):
        url = "https://api.themoviedb.org/3/movie/" + str(i) + \
            "?api_key=5605da5e202977c4ef4b7125796e1173&language=ko-KR"
        try:
            # [데이터 요청]
            r = requests.get(url)

            # [JSON 형태로 응답받은 데이터를 딕셔너리 데이터로 변환]
            items = r.json()

            data = []

            data.append([items['adult'], items['id'], items['imdb_id'], items['original_language'], items['original_title'],
                         items['overview'], items['release_date'], items['runtime'], items['status'], items['title']])
            sql = "insert into themoviedb_movie(adult, themovieid, imdb_id, original_language, original_title, overview, release_date, runtime, status, title) VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s);"
            cur.executemany(sql, data)
            result = cur.fetchall()
            print(result)  # 값 보기
            """ for n in range(len(items['genres'])):   
                        genreid = items['genres'][n]['id']
                        genrename = items['genres'][n]['name']
                        genres = [genreid,genrename]
                    print(genres) """
            
            conn.commit()
        except KeyError:
            pass
        except HTTPError as e:
            print(e)
            pass
        finally:
            print('완료')
""" 
cur.close()
conn.close() """