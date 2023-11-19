import { ModPencilIconLabel } from "./StyledComponents";
import {Modal} from './Modal';
import { Button,Box,Text } from "grommet";
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop, {
    centerCrop,
    makeAspectCrop,
    convertToPixelCrop,
  } from 'react-image-crop'
import { useState,useEffect, useRef } from "react";
import { canvasPreview } from './canvasPreview'
import { useDebounceEffect } from './useDebounceEffect'
import { useAuth } from './Context/AuthContext';
function centerAspectCrop(
    mediaWidth,
    mediaHeight,
    aspect,
  ) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 90,
        },
        aspect,
        mediaWidth,
        mediaHeight,
      ),
      mediaWidth,
      mediaHeight,
    )
  }
  
const ProfileImgEdit = ({setProfImg}) => {
    const [imgSrc, setImgSrc] = useState('')
    const previewCanvasRef = useRef(null)
    const imgRef = useRef(null)
   
    const blobUrlRef = useRef('')
    const [crop, setCrop] = useState()
    const [completedCrop, setCompletedCrop] = useState()
  
    const [aspect, setAspect] = useState(1000 / 1000)
  
    function onSelectFile(e) {
      if (e.target.files && e.target.files.length > 0) {
        setCrop(undefined) // Makes crop preview update between images.
        const reader = new FileReader()
        reader.addEventListener('load', () =>
          setImgSrc(reader.result?.toString() || ''),
        )
        reader.readAsDataURL(e.target.files[0])
      }
    }
  
    function onImageLoad(e) {
      if (aspect) {
        const { width, height } = e.currentTarget
        setCrop(1000/1000)
      }
    }
  
    async function onDownloadCropClick() {
      const image = imgRef.current
      const previewCanvas = previewCanvasRef.current
      if (!image || !previewCanvas || !completedCrop) {
        throw new Error('Crop canvas does not exist')
      }
  
      // This will size relative to the uploaded image
      // size. If you want to size according to what they
      // are looking at on screen, remove scaleX + scaleY
      const scaleX = image.naturalWidth / image.width
      const scaleY = image.naturalHeight / image.height
  
      const offscreen = new OffscreenCanvas(
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
      )
      const ctx = offscreen.getContext('2d')
      if (!ctx) {
        throw new Error('No 2d context')
      }
  
      ctx.drawImage(
        previewCanvas,
        0,
        0,
        previewCanvas.width,
        previewCanvas.height,
        0,
        0,
        offscreen.width,
        offscreen.height,
      )
      // You might want { type: "image/jpeg", quality: <0 to 1> } to
      // reduce image size
      const blob = await offscreen.convertToBlob({
        type: 'image/png',
      })
  
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current)
      }
      blobUrlRef.current = URL.createObjectURL(blob)
      setModalOpen(null);
      setProfImg(URL.createObjectURL(blob))
    }
  
    useDebounceEffect(
      async () => {
        if (
          completedCrop?.width &&
          completedCrop?.height &&
          imgRef.current &&
          previewCanvasRef.current
        ) {
          // We use canvasPreview as it's much faster than imgPreview.
          canvasPreview(
            imgRef.current,
            previewCanvasRef.current,
            completedCrop,
           
          )
        }
      },
      100,
      [completedCrop],
    )
  
   
    const [ModalOpen, setModalOpen] = useState(false);
   
   
  return (
    <><ModPencilIconLabel htmlFor="file-input" className="pencil-icon">
    <input id="file-input" type="file" accept="image/*"  onChange={(e) => {
                       onSelectFile(e);
                        setModalOpen(true);
                    }}/>
    </ModPencilIconLabel>
    
    <Modal
          Open={ModalOpen}
          onClose = {()=>setModalOpen(null) }
          Component={
          <> 
    {!!imgSrc && (
      <>
      <Text size="large" textAlign="center" margin="small">Crop Selected Image</Text>
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspect}
        //   maxWidth={250}
         // minHeight={250}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={imgSrc}
           style={{width:"100%"}}
            onLoad={onImageLoad}
          />
        </ReactCrop></>
      )}
      {!!completedCrop && (
        <>
        <Text size="large" textAlign="center" margin="small">Croped Image</Text>
          <Box>
            <canvas
              ref={previewCanvasRef}
              style={{
                border:"1px solid black",
                objectFit: 'contain',
                width: 250,
                height: 250,
                margin:"auto"
              }}
            > </canvas>
          </Box>
          <Box>
            <Button primary onClick={onDownloadCropClick} style={{marginTop:"40px"}} label="Set image" />
            
          </Box>
        </>
      )}</>
          }
        />
    
   
        
        </>
        
  )
}

export default ProfileImgEdit