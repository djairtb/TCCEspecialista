import requests


def get_user_id(login,password):
    payload = {'username':str(login),'password':str(password)}
    #LEMBRETE!!! Altere o IP do backend EX.: 'http://<IP_AQUI>:4000/login/'
    host_backend = 'http://20.85.37.196:4000/login/'
    r = requests.post(host_backend, data=payload)
    if r.status_code == 200:
        return r.json()['id']
    else:
        raise Exception('Erro ao Obter ID por favor verifique as informações')

