import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';

@Component({
  selector: 'app-tree-table',
  imports: [TreeTableModule, HttpClientModule],
  templateUrl: './tree-table.component.html',
  styleUrl: './tree-table.component.scss'
})
export class TreeTableComponent {
  files: TreeNode[] = [];
  cols = [
    { field: 'name', header: 'Name', width: '40%' },
    { field: 'count', header: 'Count', width: '20%' },
    { field: 'size', header: 'Size', width: '20%' },
    { field: 'type', header: 'Type', width: '20%' }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('assets/data/file-tree.json').subscribe(data => {
      this.files = this.mapToTreeNodes(data);
    });
  }

  mapToTreeNodes(data: any[]): TreeNode[] {
    return data.map(item => ({
      data: {
        name: item.name,
        expand: true,
        count: item.count,
        size: item.size
          ? item.size >= 1024 * 1024
            ? `${(item.size / (1024 * 1024)).toFixed(1)} MB`
            : `${Math.round(item.size / 1024)} KB`
          : '', type: item.type
      },
      children: item.children ? this.mapToTreeNodes(item.children) : undefined
    }));
  }

}