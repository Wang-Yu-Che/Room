# pip install requests
import requests  # The moudles of request
# The url of music
m_url = 'https://webfs.hw.kugou.com/202311032027/9d0b9ead39048884d8b02f7c6b4fbe56/v2/d927629d0ac5a3889481ef3023f595bc/G354/M05/52/3B/QpUEAGUN9XuAaCt_AEynxmdFLEA943.mp3'
# Head our id
headers = {
    'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
}
# Send requests to Server
m_res = requests.get(m_url, headers = headers)
# Save Data
# view-source: can show the web pages code
with open('BigFish.mp3', 'wb') as f:
    f.write(m_res.content)

