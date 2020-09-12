import React from 'react';
import tinymce from 'tinymce/tinymce';
import './index.css'

class TinymceReact extends React.Component {
    componentDidMount() {
      const dfreeBodyConfig = {
            selector: '.free-editor',
            language:'zh_CN',
            inline: true,
            menubar: false,  // 隐藏最上方menu菜单
            toolbar: false, // 隐藏工具栏
            plugins: [
              'autolink',
              'codesample',
              'link',
              'lists',
              'media',
              'table',
              'image',
              'quickbars',
              'codesample',
              'help'
            ],
            quickbars_insert_toolbar: 'quicktable image media codesample',
            quickbars_selection_toolbar: 'bold italic underline formatselect blockquote quicklink',  
            contextmenu: 'undo redo | inserttable | cell row column deletetable | help',
            powerpaste_word_import: 'clean',
            powerpaste_html_import: 'clean',
          };

        tinymce.init(dfreeBodyConfig); // 初始化配置
    }

    render() {
      return (
        <>
          <div className='free-editor'>
                  TinyMCE is incredibly flexible, and with hundreds of APIs!
          </div>
        </>
      )
    }
}

export default TinymceReact