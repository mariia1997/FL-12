const structure = [{
        'folder': true,
        'title': 'Films',
        'children': [{
                'title': 'Iron Man.avi'
            },
            {
                'folder': true,
                'title': 'Fantasy',
                'children': [{
                        'title': 'The Lord of the Rings.avi'
                    },
                    {
                        'folder': true,
                        'title': 'New folder 1',
                        'children': false
                    }
                ]
            }
        ]
    },
    {
        'folder': true,
        'title': 'Documents',
        'children': [{
            'folder': true,
            'title': 'Epam Homework answers',
            'children': null
        }]
    }
];

function create(str, root) {
    str.forEach(node => structureBase(node, root));

    root.addEventListener('click', folderToggle);

    let hid = document.querySelectorAll('.notToDisplay');
    let icons = document.querySelectorAll('.material-icons');

    function folderToggle(event) {
        if (event.target.className === 'folder') {
            hid.forEach(element => {
                if (element.parentElement === event.target.parentElement) {
                    element.classList.toggle('notToDisplay');
                }
            })
            icons.forEach(element => {
                if (element.parentElement === event.target) {
                    element.innerHTML = element.innerHTML === 'folder_open' ? 'folder' : 'folder_open';
                }
            })
        }
    }
}
let space;

function structureBase(node, nodeParrent) {
    if (nodeParrent === rootNode) {
        space = '';
    }
    let nodeCurrent = document.createElement('div');
    nodeCurrent.innerHTML = node.title;
    nodeParrent.append(nodeCurrent);

    if (node.folder) {
        nodeCurrent.innerHTML = `<p class="folder">${space}<i class="material-icons">folder</i> ${node.title}</p>`;
        if (node.children) {
            space += '&nbsp &nbsp';
            for (let child of node.children) {
                structureBase(child, nodeCurrent);
            }
        } else {
            let emptyFolderChild = document.createElement('p');
            emptyFolderChild.innerHTML = `${space}The folder is empty`;
            emptyFolderChild.classList.add('empty', 'notToDisplay');
            nodeCurrent.appendChild(emptyFolderChild);
        }
    } else {
        nodeCurrent.innerHTML = `<p class="file"> ${space}<i class="material-icons"> insert_drive_file </i> 
    ${node.title} </p>`;
    }

    if (nodeParrent !== rootNode) {
        nodeCurrent.classList.add('notToDisplay');
    }
}


const rootNode = document.getElementById('root');
create(structure, rootNode);