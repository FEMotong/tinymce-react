import React from 'react';
import tinymce from 'tinymce/tinymce';
import './index.css'
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane/lib/Pane'

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
            {/* Horizontal */}
            <SplitPane split="horizontal">
                <Pane maxSize="35%">
                  <div className='free-editor'>
                      TinyMCE is incredibly flexible, and with hundreds of APIs! 1
                  </div>
                </Pane>
              <Pane maxSize="35%">
                  <div className='free-editor'>
                      TinyMCE is incredibly flexible, and with hundreds of APIs! 2
                  </div>
              </Pane>
              <Pane maxSize="35%">
                  <div className='free-editor'>
                      TinyMCE is incredibly flexible, and with hundreds of APIs! 3
                  </div>
              </Pane>
              <Pane maxSize="50%">
                  <div className='free-editor'>
                      TinyMCE is incredibly flexible, and with hundreds of APIs! 4
                  </div>
              </Pane>
            </SplitPane>
            <br />
            {/* Multiple Vertical */}
            <SplitPane split="vertical">
                <Pane maxSize="35%">
                  <div className='free-editor'>
                      TinyMCE is incredibly flexible, and with hundreds of APIs! 1
                  </div>
                </Pane>
              <Pane maxSize="35%">
                  <div className='free-editor'>
                      TinyMCE is incredibly flexible, and with hundreds of APIs! 2
                  </div>
              </Pane>
              <Pane maxSize="35%">
                  <div className='free-editor'>
                      TinyMCE is incredibly flexible, and with hundreds of APIs! 3
                  </div>
              </Pane>
              <Pane maxSize="50%">
                  <div className='free-editor'>
                      TinyMCE is incredibly flexible, and with hundreds of APIs! 4
                  </div>
              </Pane>
            </SplitPane>
        </>
      )
    }
}

export default TinymceReact