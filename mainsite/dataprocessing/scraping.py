from bs4 import BeautifulSoup
from requests_html import HTMLSession
import pandas as pd

def extract_data(url):
    session = HTMLSession()
    response = session.get(url)
    response.html.render()

    storage = response.html.html
    soup = BeautifulSoup(storage, 'lxml')

    data = []
    table_body = soup.find_all('tr')
    for row in table_body:
        columns = row.find_all('td')
        row_data = [column.text.strip() for column in columns]
        if row_data:
            data.append({
                'disease': row_data[0],
                'cases': int(row_data[1]),
                'symptoms': row_data[2],
                'preventives': row_data[3]
            })
    return data

def calculate_total(data):
    totals = {}
    for entry in data:
        disease = entry['disease']
        if disease not in totals:
            totals[disease] = {
                'cases': 0,
                'symptoms': entry['symptoms'],
                'preventives': entry['preventives']
            }

        totals[disease]['cases'] += entry['cases']
    return totals

urls = [
    'https://zencare.vercel.app/',
    'https://sparklife.vercel.app/',
    'https://blazecare.vercel.app/',
]

all_data = []
for url in urls:
    data = extract_data(url)
    all_data.extend(data)

total_data = calculate_total(all_data)

df = pd.DataFrame(total_data).transpose()

df.to_excel('disease_data.xlsx', index_label='Disease')
