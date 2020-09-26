import React from 'react';
import tinymce from 'tinymce/tinymce';
import './index.css'
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane/lib/Pane'

class TinymceReact extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            dataMock: {
                list: [
                    {content: "one"},
                    {content: "two"},
                    {content: "three"},
                    {content: "four"},
                ]
            }
        }
    }
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

   getUpdataData = (dataMock) => {
       let area0 = this.refs.freeEditor0.innerHTML
       let area1 = this.refs.freeEditor1.innerHTML
       let area2 = this.refs.freeEditor2.innerHTML
       let area3 = this.refs.freeEditor3.innerHTML
       this.setState({
        dataMock: {
            list: [
                {content: area0},
                {content: area1},
                {content: area2},
                {content: area3},
            ]
        }
       })
    }

    render() {
        let {dataMock} = this.state
      return (
        <>
            {/* Multiple Vertical */}
           {
             dataMock.list.map((item, index) => {
               if(index < 2) {
                return (
                  <SplitPane split="vertical">
                      <Pane maxSize="35%">
                        <div className='free-editor' ref="freeEditor0" dangerouslySetInnerHTML={{__html: item["content"]}} />
                      </Pane>
                    <Pane maxSize="35%">
                        <div className='free-editor' ref="freeEditor1" dangerouslySetInnerHTML={{__html: item["content"]}} />
                    </Pane>
                    <Pane maxSize="35%">
                        <div className='free-editor' ref="freeEditor2" dangerouslySetInnerHTML={{__html: item["content"]}} />
                    </Pane>
                    <Pane maxSize="50%">
                        <div className='free-editor' ref="freeEditor3" dangerouslySetInnerHTML={{__html: item["content"]}} />
                    </Pane>
                  </SplitPane>
                )
               }  
            })
           }
            <button onClick={() => this.getUpdataData(dataMock)}>get update data</button>
        </>
      )
    }
}

export default TinymceReact