import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';

@Component({
  selector: 'app-tree-table',
  imports: [TreeTableModule],
  templateUrl: './tree-table.component.html',
  styleUrl: './tree-table.component.scss'
})
export class TreeTableComponent {
  files: TreeNode[] = [];
  cols: any[] = [];

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];

    this.files = [
      {
        data: {
          name: "Documents",
          size: "75kb",
          type: "Folder"
        },
        children: [
          {
            data: {
              name: "Work",
              size: "55kb",
              type: "Folder"
            },
            children: [
              {
                data: {
                  name: "Expenses.doc",
                  size: "30kb",
                  type: "Document"
                }
              },
              {
                data: {
                  name: "Resume.doc",
                  size: "25kb",
                  type: "Document"
                }
              }
            ]
          },
          {
            data: {
              name: "Home",
              size: "20kb",
              type: "Folder"
            },
            children: [
              {
                data: {
                  name: "Invoices.txt",
                  size: "20kb",
                  type: "Text"
                }
              }
            ]
          }
        ]
      },
      {
        data: {
          name: "Pictures",
          size: "150kb",
          type: "Folder"
        },
        children: [
          {
            data: {
              name: "Vacation",
              size: "145kb",
              type: "Folder"
            },
            children: [
              {
                data: {
                  name: "Image1.png",
                  size: "45kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              },
              {
                data: {
                  name: "Image2.png",
                  size: "100kb",
                  type: "Image"
                }
              }
            ]
          }
        ]
      }
    ];
  }
}