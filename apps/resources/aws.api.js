import { PostRoute } from "@router";
import Handler from "@utils/Handler";
import S3 from '@aws/index'

const getPresignedUpload = async (req) => {
    const fileObject = req.body;
    const response = await new S3().getPresignedUrl(fileObject.file);
    return response;
}

new PostRoute('/v1/aws/s3/presigned/upload')
    .secure()
    .bind(Handler(
        getPresignedUpload,
        'Successfully get the url to upload file.',
        'Not able to upload. Please try again'
    ));