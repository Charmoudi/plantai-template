@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String url;
    private String modelType;
    private String predictedClass;

    // getters/setters
}
