<template>
  <div class="app-container">
    <div style="margin:20px">
        <el-button type="primary" size="mini" @click="upload.open = true">添加文件</el-button>
        <el-button type="primary" size="mini" @click="submitFileForm">开始上传</el-button>
    </div>
    <el-dialog :title="upload.title" :visible.sync="upload.open" width="400px" append-to-body>
        <el-upload
            ref="upload"
            :limit="1"
            :action="upload.url"
            accept=".xlsx, .xls"
            :headers="upload.headers"
            :auto-upload="false"
            drag
            :on-change="importExcel"
            >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
            </div>
            <div class="el-upload__tip" style="color:red" slot="tip">提示：仅允许导入“xls”或“xlsx”格式文件！</div>
        </el-upload>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="upload.open = false">确 定</el-button>
            <el-button @click="upload.open = false">取 消</el-button>
        </div>
    </el-dialog>

    <div class="content">
        <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        stripe
        border
        style="width: 100%">
        <el-table-column width='50' type="selection" align="center"></el-table-column>
        <el-table-column label="序号" width="50" align="center">
            <template slot-scope="scope">
                <span>{{(currentPage - 1) * pagesize + scope.$index + 1}}</span>
            </template>
        </el-table-column>
        <el-table-column prop="所属项目" label="项目名称" width="140" align="center"></el-table-column>
        <el-table-column label="操作" width="250"  v-slot="slotProps" align="center">
            <el-button type="danger" size="mini" @click="delDevice(slotProps)">删除</el-button>
        </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
import { file2Xce } from '@/utils/manb'
export default {
    data(){
        return {
            upload:{
                open:false,
                title:'',
                url:''
            },
            //excel数据
            xlsxJson:[],

            // 表格数据
            // 遮罩层
            loading: true,
            // 当前页数
            currentPage:1,
            // 默认每页显示个数
            pagesize:10,
            // 默认总页数
            total:0,
            // 表格数据列表
            tableData:[],
        }
    },

    methods:{
        importExcel(file){
            file2Xce(file).then(tabJson=>{
                if (tabJson && tabJson.length > 0) {
                    // 业务逻辑
                    this.xlsxJson = []
                    this.xlsxJson.push(...tabJson[0].sheet)
                    this.tableData = this.xlsxJson;
                }
            })
        },
        // 上传文件
        submitFileForm(){
            this.$refs.upload.submit();
        }
    }
}
</script>

<style>

</style>