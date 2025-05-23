@RestController
@RequestMapping("/api/images")
@CrossOrigin(origins = "*")
public class ImageController {
    @Autowired
    private ImageService imageService;

    @PostMapping("/filter")
    public List<Image> filterImages(@RequestBody ImageFilterRequest request) {
        return imageService.filterImages(request.getModelType(), request.getPredictedClasses());
    }
}
