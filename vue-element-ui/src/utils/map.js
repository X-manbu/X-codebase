// 坐标转换
import coordtransform from "coordtransform";
// 将bd09、wgs84坐标系地转换为gcj02的方法
// 参数:longitude 经度、  latitude纬度、 lType 坐标系类型
export function mapSwitch(longitude, latitude, lType) {
    let coordinate = [];
    if (longitude && latitude) {
        // 保存经纬度
        coordinate = [longitude, latitude];
        switch (lType) {
            case "0":
                // 若是wgs84坐标系 则转为gcj02
                coordinate = coordtransform.wgs84togcj02(
                    coordinate[0],
                    coordinate[1]
                );
                break;
            case "2":
                // 若是bd09坐标系 则转gcj02
                coordinate = coordtransform.bd09togcj02(
                    coordinate[0],
                    coordinate[1]
                );
                break;
            default:
                // 其它则认为是gcj02 不作转换
                break;
        }
    }
    return coordinate;
}
