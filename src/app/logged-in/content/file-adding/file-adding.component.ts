import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileChangeEvent} from '@angular/compiler-cli/src/perform_watch';
import {FileUploadService} from '../../../core/services/file-upload/file-upload.service';

@Component({
  selector: 'app-file-adding',
  templateUrl: './file-adding.component.html',
  styleUrls: ['./file-adding.component.scss']
})
export class FileAddingComponent implements OnInit {

  fileForm: FormGroup;
  selectedFile: File;

  constructor(private fb: FormBuilder,
              private fileService: FileUploadService) {

  }

  ngOnInit() {
    this.createGroup();
  }

  createGroup(): void {
    this.fileForm = this.fb.group({
      file: [null, Validators.required]
    });
  }

  onFileChange(fileInputEvent: any) {
    this.selectedFile = <File>fileInputEvent.target.files[0];
    console.log(this.selectedFile);
  }

  uploadFile(): void {
    const wrappedFile: FormData = new FormData();
    wrappedFile.append('file', this.selectedFile, this.selectedFile.name);
    this.fileService.uploadFile(wrappedFile)
      .subscribe(() => {
        console.log('dodane');
        console.log('x');
      })
  }
}
