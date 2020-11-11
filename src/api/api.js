
import request from '@/utils/request'

export function qrcode(data) {
    return request({
        url: 'api/login/login',
        method: 'post',
        data
    })
}
export function technical(data) {
    return request({
        url: 'api/technical/Skillslist',
        method: 'post',
        data
    })
}

export function dynamicInfo(data) {
    return request({
        url: 'api/technical/dynamicInfo',
        method: 'post',
        data
    })
}
export function serve(data) {
    return request({
        url: 'api/industry/industry',
        method: 'post',
        data
    })
}

export function projectList(data) {
    return request({
        url: 'api/industry/projectList',
        method: 'post',
        data
    })
}

export function typelist(data) {
    return request({
        url: 'api/project/typelist',
        method: 'post',
        data
    })
}


export function projectlist(data) {
    return request({
        url: 'api/project/projectlist',
        method: 'post',
        data
    })
}

export function dynamic(data) {
    return request({
        url: 'api/dynamics/dynamic',
        method: 'post',
        data
    })
}


export function system(data) {
    return request({
        url: 'api/manual/system',
        method: 'post',
        data
    })
}


export function modelnorm(data) {
    return request({
        url: 'api/manual/modelnorm',
        method: 'post',
        data
    })
}

export function learn(data) {
    return request({
        url: 'api/manual/learn',
        method: 'post',
        data
    })
}



export function learninfo(data) {
    return request({
        url: 'api/manual/learninfo',
        method: 'post',
        data
    })
}

// 获取验证码
export function vCode(data) {
    return request({
        url: 'api/index/vCode',
        method: 'post',
        data
    })
}


export function upload(data) {
    return request({
        url: 'api/upload/uploads',
        method: 'post',
        data
    })
}


export function tecdynamicInfo(data) {
    return request({
        url:'api/technical/dynamicInfo',
        method: 'post',
        data
    })
}


// api/technical​/dynamicInfo



// 软件分类

export function protypelist(data) {
    return request({
        url:'api/project/typelist',
        method: 'post',
        data
    })
}


export function abaddNeed(data) {
    return request({
        url:'api/about/addNeed',
        method: 'post',
        data
    })
}


export function ababout(data) {
    return request({
        url:'api/about/about',
        method: 'post',
        data
    })
}


export function abcompany(data) {
    return request({
        url:'api/about/companylist',
        method: 'post',
        data
    })
}

export function abrecruitment(data) {
    return request({
        url:'api/about/recruitment',
        method: 'post',
        data
    })
}
export function mansystem(data){
    return request({
        url:'api/manual/systemInfo',
        method:'post',
        data
    })
}

export function manmodelnormInfo(data){
        return request({
            url:'api/manual/modelnormInfo',
            method:'post',
            data
        })
}

export function proInfo(data){
    return request({
        url:'api/project/projectInfo',
        method:'post',
        data
    })
}

export function dyInfo(data){
    return request({
        url:'api/dynamics/dynamicInfo',
        method:'post',
        data
    })
}

export function abactivityInfo(data){
    return request({
        url:'api/about/activityInfo',
        method:'post',
        data
    })
}

export function abrecruitmentInfo(data){
   return request ({
       url:'api/about/recruitmentInfo',
       method:'post',
       data
   })
}











































