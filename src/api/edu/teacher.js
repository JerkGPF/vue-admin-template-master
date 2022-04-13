import request from '@/utils/request'

export default {
    //1.讲师列表（条件查询分页）
    //当前页，每页记录数，查询条件
    getTeacherListPage(current, limit, teacherQuery) {
        return request({
            // url: '/table/list/'+current+'/'+limit,
            url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            //teacherQuery条件对象，后端用requestBody获取数据
            //data表示把对象转换json传递到接口
            data: teacherQuery
        })
    },
    //2.删除讲师
    deleteTeacherId(id) {
        return request({
            // url: '/table/list/'+current+'/'+limit,
            url: `/eduservice/teacher/${id}`,
            method: 'delete',
        })
    },
    //3.添加讲师
    addTeacher(teacher) {
        return request({
            url: `/eduservice/teacher/addTeacher`,
            method: 'post',
            data: teacher
        })
    },
    //4.得到讲师信息
    getTeacherInfo(id) {
        return request({
            url: `/eduservice/teacher/getTeacher/${id}`,
            method: 'get',
        })
    },
    //修改信息
    updateTeacherInfo(teacher) {
        return request({
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher
        })
    },

}

