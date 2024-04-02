


#1.Preview the content of the dataset

file_path='_chat 2.txt'

with open(file_path, "r", encoding="utf-8") as file:
    chat_text = file.read()

# Mostrar los primeros 500 caracteres para obtener una vista previa del contenido
print(chat_text[:500])