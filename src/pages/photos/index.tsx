import * as React from "react";
import Layout from "../../components/layout";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
// import FileUploader from "../../components/fileUploader";
import { OutputFileEntry } from "@uploadcare/react-uploader";
import { useUserAuth } from "../../assets/context/userAuthContext";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

interface IPhotosProps {}

type Post = {
  caption: string;
  photos: PhotoMeta[];
  likes: number;
  userLikes: [];
  userId: string;
  date: Date;
};

type PhotoMeta = {
  url: string | null;
  cdnUrl: string | null;
  uid: string;
};

type FileEntry = {
  files: OutputFileEntry[]; //make the files type an array of objects that contains file details
};

const Photos: React.FunctionComponent<IPhotosProps> = () => {
  const { user } = useUserAuth(); //import the userAuth details for access to the userId to link with posts

  //create a post state that involves all the initial values of the data we want to display
  const [post, setPost] = React.useState<Post>({
    caption: "",
    photos: [], //photo is a list of objects  with details of a photo
    likes: 0,
    userLikes: [],
    userId: user?.uid || "", //userId from user we imported
    date: new Date(),
  });

  React.useEffect(() => {
    console.log(post.caption);
  }, [post.caption]);
  const [fileEntry, setFileEntry] = React.useState<FileEntry>({
    files: [],
  });

  const handleFileChange = ({
    allEntries, //an instance of the files already entered
  }: {
    allEntries: OutputFileEntry[];
  }) => {
    setFileEntry({ files: allEntries.filter((f) => f.status === "success") });
  };

  // const handleFileChange = ({
  //   allEntries,
  // }: {
  //   allEntries: OutputFileEntry[];
  // }) => {
  //   setFileEntry({
  //     files: allEntries.filter((f) => f.status === "success"),
  //   });
  // };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const uploadedPhotosUrl: PhotoMeta[] = fileEntry.files.map((file) => ({
      url: file.cdnUrl,
      cdnUrl: file.cdnUrl,
      uid: file.uuid || "",
    }));

    setPost((prev) => ({ ...prev, Photos: uploadedPhotosUrl }));

    console.log("The file entry is:", fileEntry);
    console.log("The post data is:", {
      ...post,
      photos: uploadedPhotosUrl,
    });

    //reset post and file details
    setPost({
      caption: "",
      photos: [], //photo is a list of objects  with details of a photo
      likes: 0,
      userLikes: [],
      userId: user?.uid || "", //userId from user we imported
      date: new Date(),
    });

    setFileEntry({
      files: [],
    });
  };
  return (
    <div>
      <Layout>
        <div className="border border-4  drop-shadow-lg m-8 p-4">
          <form className=" p-4" onSubmit={handleFormSubmit}>
            <h2 className="text-center font-bold text-white bg-black p-4">
              PUBLISH YOUR STORY
            </h2>
            <div>
              <Textarea
                placeholder="Enter your story"
                className="w-[80%] h-[200px] border border-2 flex m-auto mt-10 rounded-2xl"
                value={post.caption}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setPost({ ...post, caption: e.target.value });
                }}
              />
              <FileUploaderRegular
                sourceList="local, url, camera, dropbox"
                classNameUploader="uc-light"
                pubkey="91074b52ee047cda8988"
                className="mt-4 flex justify-start"
                onChange={handleFileChange}
              />

              <div>
                {fileEntry.files.length > 0 && (
                  <div>
                    <h2>Chosen images</h2>
                    <div className=" flex gap-2 items-center">
                      {fileEntry.files.map((file, index) => (
                        <div>
                          <img
                            key={index}
                            src={file.cdnUrl ?? ""}
                            alt={`Uploaded file ${index + 1}`}
                            className="w-32 h-32 object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>  
                )}
              </div>
              <Button className="flex  item-start mt-8">Post</Button>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Photos;
