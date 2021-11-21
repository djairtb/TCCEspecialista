import requests
import getpass

def get_user_id(login,password):
    payload = {'username':str(login),'password':str(password)}
    host_backend = 'http://20.85.37.196:4000/login/'
    r = requests.post(host_backend, data=payload)    
    if r.status_code == 200:
        return r.json()['id']
    else:
        raise Exception('Erro ao Obter ID por favor verifique as informações')

user = input('Digite seu login: ')
senha = getpass.getpass("Digite sua senha: ")

user_id = get_user_id(user,senha)

print(user_id)