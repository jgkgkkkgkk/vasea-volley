import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',

})
export class PageComponent  {
  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadFile(file);
    }
  }

  uploadFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    // Создание URL-адреса объекта файла для отображения на экране
    this.imageUrl = URL.createObjectURL(file);

    // Здесь вы можете отправить данные formData на сервер
    console.log('Отправка файла:', formData);
  }
  constructor() {

  }


}
