interface FileSystemComponent {
  showDetails(): void;
}

class File1 implements FileSystemComponent {
  constructor(private name: string) {}

  showDetails(): void {
    console.log(`File: ${this.name}`);
  }
}

class Folder implements FileSystemComponent {
  private children: FileSystemComponent[] = [];

  constructor(private name: string) {}

  showDetails(): void {
    console.log(`Folder: ${this.name}`);
    console.log(`Files in this folder: `, this.children);
  }

  add(component: FileSystemComponent) {
    this.children.push(component);
  }
}

const folder = new Folder('DSA');

const graphFolder = new Folder('Graphs');
graphFolder.add(new File1('DFS'));
graphFolder.add(new File1('BFS'));
folder.add(graphFolder);

folder.add(new File1('DP'));
folder.add(new File1('Two Pointers'));
