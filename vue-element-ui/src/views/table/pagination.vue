<template>
    <div class='app-container'>
        <div class="content">
            <el-table
            v-loading="loading"
            :data="tableData"
            stripe
            border
            style="width: 100%">
            <!-- 复选框 -->
            <el-table-column width='50' type="selection" align="center"></el-table-column>
            <el-table-column label="序号" width="50" align="center">
                <template slot-scope="scope">
                    <span>{{(queryParams.pageNum - 1) * queryParams.pageSize + scope.$index + 1}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="data" label="数据" width="140" align="center"></el-table-column>
            <el-table-column label="操作" width="250"  v-slot="slotProps" align="center">
                <el-button type="danger" icon="el-icon-delete" size="mini" @click="delDevice(slotProps)">删除</el-button>
            </el-table-column>
            </el-table>

            <div class="pagination">
                <pagination
                        v-show="total>0"
                        :total="total"
                        :page.sync="queryParams.pageNum"
                        :limit.sync="queryParams.pageSize"
                        @pagination="getList"
                    />
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from "@/components/Pagination";
export default {
    name: '',
    components:{
        Pagination
    },
    data () {
        return {
            loading:true,
            // 总条目数
            total:0,
            // 查询参数
            queryParams:{
                // 当前页数
                pageNum:1,
                // 每页显示条目个数
                pageSize:10,
            },
            // 数据
            tableData:[]
        }
    },
    created(){
        this.getList();
    },
    methods:{
        getList(){
            console.log('初始化数据');
            this.loading = false;
        }
    }
}
</script>

<style scoped>
</style>

