<template>
    <div>
        <div id="spread"></div>
    </div>
</template>
<script>
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
import GC from "@grapecity/spread-sheets";
import "@grapecity/spread-sheets-vue";
import "@grapecity/spread-sheets-resources-zh";
import ExcelIO from "@grapecity/spread-excelio";
import FaverSaver from "file-saver";
import "@grapecity/spread-sheets-print";
// import func from '../../vue-temp/vue-editor-bridge';
export default {
    data(){
        return{
            spread: null,
            spreadNS: null,
            addColHeader: null,
        }
    },
    mounted(){
        const dataSource = [
            {id: 0,name:'Ben',age: 22},
            {id: 1,name:'Allen',age: 25},
            {id: 2,name:'Keven',age: 23},
        ]
        GC.Spread.Common.CultureManager.culture("zh-cn"); // 汉化
        this.spread = new GC.Spread.Sheets.Workbook(document.getElementById('spread'), { sheetCount: 1 });
        // this.spread.setBodyData()
        // this.spread.editAllowDisDetail([0])
        const activeSheet = this.spread.getActiveSheet();
        activeSheet.setDataSource(dataSource);
        var style = new GC.Spread.Sheets.Style();
        style.vAlign = GC.Spread.Sheets.VerticalAlign.center;
        style.hAlign = GC.Spread.Sheets.HorizontalAlign.center;
        style.backColor = "#f4a523";
        activeSheet.setStyle(-1,1,style);
        // activeSheet.setValue(2,2,20)
        // console.log(activeSheet.getFormula(1,1))
        // this.sheet.zoom(1.0)    
        this.spreadNS = GC.Spread.Sheets;   
        this.addColHeader = GC.Spread.Sheets.SheetArea.colHeader; // 动态添加表头
        
        this.spread.options.tabStripVisible = false;   //表单底部只显示滚动条
        this.spread.invalidateLayout();
        this.spread.options.scrollbarMaxAlign = true; //滚动条对齐视图中表单的最后一行或一列
        this.spread.options.showVerticalScrollbar = false; //初始表格无数据时没有竖向滚动条

        activeSheet.bind(GC.Spread.Sheets.Events.CellClick,function(sender, args){
            console.log(sender, args);
        })
    }
}
</script>